import * as React from "react";
import Head from "next/head";

interface Props {
  title: string;
  description: string;
  keyword?: string;
  image?: string;
  url: string;
}

export default ({
  title,
  description,
  keyword = "Next.js,TypeScript,JAMスタック,ブログ,microCMS",
  image,
  url,
}: Props): JSX.Element => {
  const baseUrl = "https://next-js-blog-yanagisawahidetoshi.vercel.app/";
  const absolutePath = `${baseUrl}${url}`;
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={absolutePath} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tcr_jp" />
      <meta name="twitter:url" content={absolutePath} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <link rel="canonical" href={absolutePath} />
      <link rel="icon" href={`${baseUrl}favicon.ico`} />
      <link rel="apple-touch-icon" href={`${baseUrl}apple-touch-icon`} />
      <meta
        name="google-site-verification"
        content="Ny09IPFr_Pv-3iA28AChDnhw2v_OE9HTEKq9AzJ65tE"
      />
    </Head>
  );
};
