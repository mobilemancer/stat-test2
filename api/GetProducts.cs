using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace ESMUG.Demo
{
  public static class GetProducts
  {
    [FunctionName(nameof(GetProducts))]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
        ExecutionContext context,
        ILogger log)
    {
      log.LogInformation($"{nameof(GetProducts)} called.");
      var products = await File.ReadAllTextAsync(Path.Combine(context.FunctionAppDirectory, "data", "products.json"));
      return new OkObjectResult(products);
    }
  }
}
