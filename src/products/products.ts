import { HttpClient, json } from "aurelia";

export class Products {
  public products = [];

  constructor(private httpClient: HttpClient) {}

  public async canLoad() {
    console.log("loading");
    let productsUrl =
      window.location.hostname === "localhost" ? "http://localhost:7071/api/getproducts" : "/api/getproducts";

    this.products = await this.requestProducts(productsUrl);
    return true;
  }

  public async edit(product) {
    console.log(product);
    let editUrl =
      window.location.hostname === "localhost" ? "http://localhost:7071/api/editproduct" : "/api/editproduct";

    const response = await this.editProduct(editUrl, product);
    console.log(response);
  }

  private async requestProducts(url: string) {
    const response = await this.httpClient.fetch(url, {});
    return await response.json();
  }

  private async editProduct(url: string, product: object) {
    const response = await this.httpClient.fetch(url, {
      method: "post",
      body: json(product),
    });
    return await response.json();
  }
}
