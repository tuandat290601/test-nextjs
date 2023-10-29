import "styles/globals.scss";
import { useState } from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Devtools from "components/Devtools";
import Layout from "components/Layout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Devtools />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
