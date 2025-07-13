import { setupWorker } from "msw/browser";
import { handlers } from "./mocks/handlers";

const worker = setupWorker(...handlers);

export async function initMocks() {
  if (typeof window === "undefined") return;

  await worker.start({
    onUnhandledRequest: "bypass",
  });
}
