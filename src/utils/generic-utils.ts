interface Tag {
  code: string;
  list: { code: string; value: string }[];
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getTimestampFromDuration(
  date: string | Date,
  duration: string
): string {
  console.log("duratioN", duration);
  const durationRegex = /P(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/;
  const match = duration.match(durationRegex);

  if (!match) {
    throw new Error("Invalid ISO 8601 duration format");
  }

  const days = match[1] ? parseInt(match[1], 10) || 0 : 0;
  const hours = match[2] ? parseInt(match[2], 10) || 0 : 0;
  const minutes = match[3] ? parseInt(match[3], 10) || 0 : 0;
  const seconds = match[4] ? parseInt(match[4], 10) || 0 : 0;

  const futureDate = new Date(date);
  futureDate.setDate(futureDate.getDate() + days);
  futureDate.setHours(futureDate.getHours() + hours);
  futureDate.setMinutes(futureDate.getMinutes() + minutes);
  futureDate.setSeconds(futureDate.getSeconds() + seconds);

  return futureDate.toISOString();
}

export function removeTagsByCodes(tags: Tag[], codesToRemove: string[]): Tag[] {
  return tags.filter((tag) => !codesToRemove.includes(tag.code));
}

export function getFutureDate(daysAhead: number): string {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + daysAhead);

  return futureDate.toISOString().split("T")[0];
}
