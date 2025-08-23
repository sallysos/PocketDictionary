export default function Results({ entry }) {
  if (!entry) return null;

  const word = entry?.meta?.id || "";

  // pronunciation 
  const prs = entry?.hwi?.prs?.[0];
  const pron = prs?.mw || "";

  // audio URL 
  let audioSrc = "";
  const aud = prs?.sound?.audio;
  if (aud) {
    let sub = aud.charAt(0);
    if (aud.startsWith("bix")) sub = "bix";
    else if (aud.startsWith("gg")) sub = "gg";
    else if (aud.match(/^\d/)) sub = "number";
    audioSrc = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${sub}/${aud}.mp3`;
  }

  // definitions
  const shortdefs = Array.isArray(entry?.shortdef) ? entry.shortdef : [];

  // examples 
  const examples = [];
  (entry?.def || []).forEach((block) => {
    (block?.sseq || []).forEach((group) => {
      group.forEach((senseArr) => {
        const sense = senseArr?.[1];
        (sense?.dt || []).forEach((dt) => {
          if (dt?.[0] === "vis") {
            dt[1].forEach((visObj) => {
              const raw = visObj?.t || "";
              const cleaned = raw.replace(/\{\/?wi\}/g, "");
              if (cleaned) examples.push(cleaned);
            });
          }
        });
      });
    });
  });

  const hasDefs = shortdefs.length > 0;
  const hasEx = examples.length > 0;

  return (
    <>
      <div id="results" className="class-result">
        <h1 id="word-title">{word}</h1>

        {pron && <p id="word-pr">Pronunciation: {pron}</p>}

        {audioSrc ? (
          <audio id="word-aud" controls src={audioSrc} />
        ) : (
          <audio id="word-aud" controls hidden />
        )}

        {hasDefs && (
          <div className="class-definition">
            <h2>Definitions</h2>
            <ul id="word-def">
              {shortdefs.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        )}

        {hasEx && (
          <div className="class-example">
            <h2>Examples</h2>
            <ul id="word-ex">
              {examples.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="class-go-to-dict">
        <p>
          Search Merriam-Webster for{" "}
          <a
            href={`https://www.merriam-webster.com/dictionary/${encodeURIComponent(word)}`}
            id="external-link"
            target="_blank"
            rel="noreferrer"
          >
            this word
          </a>
        </p>
      </div>
    </>
  );
}