import { HttpClient } from "aurelia";
// import { Edit } from "./edit/edit";

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

  public edit(args) {
    console.log(args);
    // this.router.load(new Edit(args));
  }

  private async requestProducts(url: string) {
    const response = await this.httpClient.fetch(url, {});
    return await response.json();
  }
}
