const plans = [
  {
    name: "Basic",
    price: "$9.99/Month",
    features: {
      Content:
        "Access to a wide selection of movies and shows, including some new releases.",
      Devices: "Watch on one device simultaneously",
      FreeTrial: "7 Days",
      CancelAnytime: "Yes",
      HDR: "No",
      DolbyAtmos: "No",
      AdFree: "No",
      OfflineViewing: "No",
      FamilySharing: "No",
    },
  },
  {
    name: "Standard",
    tag: "Popular",
    price: "$12.99/Month",
    features: {
      Content:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      Devices: "Watch on Two device simultaneously",
      FreeTrial: "7 Days",
      CancelAnytime: "Yes",
      HDR: "Yes",
      DolbyAtmos: "Yes",
      AdFree: "Yes",
      OfflineViewing: "Yes, for select titles.",
      FamilySharing: "Yes, up to 5 family members.",
    },
  },
  {
    name: "Premium",
    price: "$14.99/Month",
    features: {
      Content:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      Devices: "Watch on Four device simultaneously",
      FreeTrial: "7 Days",
      CancelAnytime: "Yes",
      HDR: "Yes",
      DolbyAtmos: "Yes",
      AdFree: "Yes",
      OfflineViewing: "Yes, for all titles.",
      FamilySharing: "Yes, up to 6 family members.",
    },
  },
];


export default plans