import { siteConfig } from "@/lib/seo-config";
import { faqs } from "@/data/faqs";
import { testimonials } from "@/data/testimonials";
import { colours, presets } from "@/data/products";

function calculateAggregateRating() {
  const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
  return {
    ratingValue: (total / testimonials.length).toFixed(1),
    reviewCount: testimonials.length,
    bestRating: 5,
    worstRating: 1,
  };
}

export function JsonLd() {
  const aggregate = calculateAggregateRating();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.png`,
    },
    foundingCountry: "AU",
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: siteConfig.language,
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteConfig.url}/#product`,
    name: "NoseFlow Silicone Nasal Dilator",
    description:
      "Medical-grade silicone nasal dilator that gently expands the nasal valve for immediate, comfortable airflow improvement. Reusable, washable, and drug-free.",
    image: colours.map((c) => `${siteConfig.url}${c.image}`),
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    sku: "NF-DILATOR-001",
    material: "Medical-grade silicone",
    category: "Health & Wellness > Breathing Aids",
    offers: presets.map((preset) => ({
      "@type": "Offer",
      name: `NoseFlow Nasal Dilator — ${preset.label}`,
      price: preset.price.toFixed(2),
      priceCurrency: siteConfig.currency,
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/#shop`,
      priceValidUntil: new Date(
        new Date().getFullYear() + 1,
        0,
        1
      ).toISOString().split("T")[0],
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "4.95",
          currency: siteConfig.currency,
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "AU",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 3,
            unitCode: "d",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 3,
            maxValue: 7,
            unitCode: "d",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "AU",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnMethod: "https://schema.org/ReturnByMail",
      },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregate.ratingValue,
      reviewCount: aggregate.reviewCount,
      bestRating: aggregate.bestRating,
      worstRating: aggregate.worstRating,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: t.text,
    })),
  };

  const allFaqQuestions = faqs.flatMap((group) => group.questions);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqQuestions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Shop",
        item: `${siteConfig.url}/#shop`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
