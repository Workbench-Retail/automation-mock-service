import { SessionData } from "../../../session-types";

const featureDiscoveryCode = [
  "001",
  "002",
  "003",
  "004",
  "005",
  "006",
  "007",
  "008",
  "0091",
  "0092",
  "0093",
  "0094",
  "0095",
  "0096",
  "0097",
  "0098",
  "0099",
  "00A",
  "00B",
  "00C",
  "00D",
  "00E",
  "00F",
  "010",
  "011",
  "012",
  "013",
  "014",
  "015",
  "016",
  "017",
  "018",
  "019",
  "01A",
  "01B",
  "01C",
  "01D",
  "01E",
  "01F",
  "020",
  "021",
  "022",
  "023",
  "024",
  "025",
];

export const searchGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  existingPayload.message.intent.tags.push({
    code: "bap_feature",
    list: featureDiscoveryCode.map((code) => {
      return {
        code: code,
        value: "yes",
      };
    }),
  });
  return existingPayload;
};
