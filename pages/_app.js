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
  const router = useRouter();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
