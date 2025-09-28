import { validateTrabalhos, type Trabalho } from "@/domain/trabalho";

/**
 * Maps API response data to validated Trabalho domain entities as array
 * Use this when you need the trabalhos as an array instead of a Map
 */
export function mapApiResponseToTrabalhosArray(
  apiResponse: unknown
): Trabalho[] {
  if (
    !apiResponse ||
    typeof apiResponse !== "object" ||
    !("data" in apiResponse) ||
    !Array.isArray((apiResponse as { data: unknown }).data)
  ) {
    throw new Error(
      "Invalid API response format: missing or invalid data array"
    );
  }

  try {
    return validateTrabalhos((apiResponse as { data: unknown[] }).data);
  } catch (error) {
    console.error("Failed to validate trabalhos from API response:", error);
    throw new Error("Invalid trabalho data received from API");
  }
}

/**
 * Maps individual API response item to validated Trabalho domain entity
 */
export function mapApiResponseToTrabalho(apiResponseItem: unknown): Trabalho {
  try {
    return validateTrabalhos([apiResponseItem])[0];
  } catch (error) {
    console.error("Failed to validate trabalho from API response:", error);
    throw new Error("Invalid trabalho data received from API");
  }
}
