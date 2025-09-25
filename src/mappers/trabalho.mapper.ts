import { validateTrabalhos, type Trabalho } from "@/domain/trabalho";

/**
 * Maps API response data to validated Trabalho domain entities
 */
export function mapApiResponseToTrabalhos(apiResponse: any): Trabalho[] {
  if (!apiResponse?.data || !Array.isArray(apiResponse.data)) {
    throw new Error(
      "Invalid API response format: missing or invalid data array"
    );
  }

  try {
    return validateTrabalhos(apiResponse.data);
  } catch (error) {
    console.error("Failed to validate trabalhos from API response:", error);
    throw new Error("Invalid trabalho data received from API");
  }
}

/**
 * Maps individual API response item to validated Trabalho domain entity
 */
export function mapApiResponseToTrabalho(apiResponseItem: any): Trabalho {
  try {
    return validateTrabalhos([apiResponseItem])[0];
  } catch (error) {
    console.error("Failed to validate trabalho from API response:", error);
    throw new Error("Invalid trabalho data received from API");
  }
}
