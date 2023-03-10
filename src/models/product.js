import * as productServices from "../services/product";

export default {
  namespace: "product",
  state: {
    products: [],

    productsItem: [],
    offSet: 0,
    isAddProducts: false,
    refreshing: false,
    isBusy: false,
    isMaxProducts: false,
    errorMessage: undefined,
  },
  reducers: {
    updateState(state, payload) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    async list(payload, rootState) {
      const {  offSet, isAddProducts } = rootState.product;
      var addOffSet = 30;
      var fixOffSetWhenReachedMax = 70;
      try {
        this.updateState({
          refreshing: true,
          isBusy: true,
        });

        var FinalOffset;
        if (isAddProducts) {
           FinalOffset = offSet+addOffSet;
          if(offSet > 60){
            FinalOffset = fixOffSetWhenReachedMax;
            payload = {  skip: FinalOffset };
          } else {
            payload = {  skip: FinalOffset };
          }
        } else {
           FinalOffset = offSet;
        }
        const result = await productServices.getProducts(payload);
        const data = result.products;

        this.updateState({
          products: data,
          offSet: FinalOffset >= 90 ? 70:FinalOffset,
          offSet:FinalOffset,
          isBusy: false,
          refreshing: false,
          isMaxProducts: FinalOffset >= 90 ? true: false,
        });
      } catch (err) {
        console.log("error");
        console.log(err);
        this.updateState({
          errorMessage: err.message,
          isBusy: false,
          refreshing: false,
          isAddProducts: false,
        });
      }
    },

    async getItem(payload, rootState) {
      try {
        this.updateState({
          refreshing: true,
          isBusy: true,
        });

        const result = await productServices.getProductsItem(payload);

        this.updateState({
          productsItem: result,
          isBusy: false,
          refreshing: false,
        });
      } catch (err) {
        console.log("error");
        console.log(err);
        this.updateState({
          errorMessage: err.message,
          isBusy: false,
          refreshing: false,
        });
      }
    },

    async resetProducts(payload, rootState) {

      this.updateState({
        refreshing: true,
        isBusy: true,
      });

      const result = await productServices.getProducts(payload);
        const data = result.products;

      this.updateState({
        products: data,
        offSet: 0,
        isBusy: false,
        refreshing: false,
        isMaxProducts: false,
      });
    },

    async isAddProducts(payload, rootState) {
      this.updateState({
        isAddProducts: true,
      });
    },
  }),
};
