import { HttpClient } from "aurelia";

export class Products {
  public products = [];

  constructor(private httpClient: HttpClient) {
    this.init();
  }

  private async init(): Promise<void> {
    let productsUrl =
      window.location.hostname === "localhost" ? "http://localhost:7071/api/getproducts" : "/api/getproducts";

    this.products = await this.requestProducts(productsUrl);
  }

  private async requestProducts(url: string) {
    const response = await this.httpClient.fetch(url, {});
    return await response.json();
  }
}
