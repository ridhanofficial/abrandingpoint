import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

interface InquiryContextValue {
  prefillService: string | null;
  setPrefillService: (service: string | null) => void;
}

const InquiryContext = createContext<InquiryContextValue | undefined>(undefined);

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [prefillService, setPrefillService] = useState<string | null>(null);

  const value = useMemo(() => ({ prefillService, setPrefillService }), [prefillService]);

  return <InquiryContext.Provider value={value}>{children}</InquiryContext.Provider>;
}

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error("useInquiry must be used within InquiryProvider");
  return ctx;
}
