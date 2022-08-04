import usePreviewHotkeys from "./hooks/usePreviewHotkeys";

type HotIFrameProps = {
  viewMode: ViewMode;
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
  srcDoc: string;
};

const HotIFrame: React.FC<HotIFrameProps> = ({
  viewMode,
  setViewMode,
  srcDoc,
}) => {
  const { iframeRef } = usePreviewHotkeys({ setViewMode });

  return (
    <>
      {viewMode === "html" ? (
        <div
          className="code-container"
          contentEditable
          suppressContentEditableWarning
        >
          <code>{srcDoc}</code>
        </div>
      ) : (
        <div className={`frame ${viewMode === "mobile" ? " mobile" : ""}`}>
          <iframe srcDoc={srcDoc} ref={iframeRef} />
        </div>
      )}
      <style jsx>{`
        .frame {
          margin: auto;
          display: block;
        }
        .mobile.frame {
          padding: 64px 16px 74px;
          max-width: 324px;
          border-radius: 32px;
          margin: 64px auto;
        }
        .mobile iframe {
          height: 568px;
          max-width: 320px;
        }
        iframe {
          width: 100%;
          border: none;
          height: calc(100vh - 65px);
        }
        .mobile,
        .mobile iframe {
          border: 2px solid #ccc;
        }
        code {
          font-size: 10px;
          white-space: pre-wrap;
        }
        .code-container {
          padding: 16px;
          outline: none;
        }
        @media (prefers-color-scheme: dark) {
          code {
            white-space: pre-wrap;
          }
          .code-container {
            color: white;
            background: black;
          }
        }
      `}</style>
    </>
  );
};

export default HotIFrame;
