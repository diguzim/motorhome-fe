import { validateTrabalhos, type Trabalho } from "@/domain/trabalho";

/**
 * Maps API response data to validated Trabalho domain entities
 * Returns a Map with slug as key for efficient lookups
 */
export function mapApiResponseToTrabalhos(
  apiResponse: any
): Map<string, Trabalho> {
  if (!apiResponse?.data || !Array.isArray(apiResponse.data)) {
    throw new Error(
      "Invalid API response format: missing or invalid data array"
    );
  }

  try {
    const trabalhos = validateTrabalhos(apiResponse.data);
    const trabalhoMap = new Map<string, Trabalho>();

    trabalhos.forEach((trabalho) => {
      trabalhoMap.set(trabalho.slug, trabalho);
    });

    return trabalhoMap;
  } catch (error) {
    console.error("Failed to validate trabalhos from API response:", error);
    throw new Error("Invalid trabalho data received from API");
  }
}

/**
 * Maps API response data to validated Trabalho domain entities as array
 * Use this when you need the trabalhos as an array instead of a Map
 */
export function mapApiResponseToTrabalhosArray(apiResponse: any): Trabalho[] {
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
