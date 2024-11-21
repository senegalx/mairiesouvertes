import React, { useState } from "react";

type ContentObject = {
  rendered?: string;
  raw?: string;
  toString(): string;
};

interface ContentToggleProps {
  content: string | ContentObject | null;
  className?: string;
  initialState?: boolean;
  previewLength?: number;
  htmlContent?: boolean;
}

const ContentToggle: React.FC<ContentToggleProps> = ({
  content,
  className = "",
  initialState = false,
  previewLength = 150,
  htmlContent = false,
}) => {
  if (!content) return null;
  
  const [isExpanded, setIsExpanded] = useState(initialState);

  const getContentString = (input: NonNullable<ContentToggleProps['content']>): string => {
    if (typeof input === 'string') return input;
    return input.rendered || input.raw || input.toString();
  };

  const getPreviewText = (contentStr: string): string => {
    if (!contentStr) return '';
    
    const processedText = htmlContent
      ? contentStr.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
      : contentStr;
      
    const text = processedText.substring(0, previewLength);
    return text.length < processedText.length ? `${text}...` : text;
  };

  const contentStr = getContentString(content);
  const previewText = getPreviewText(contentStr);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article 
      className={`content-toggle mb-4 ${className}`}
      aria-expanded={isExpanded}
    >
      <div className="rounded-lg bg-primary/10 px-6 py-4 shadow-sm">
        <div className={`text-lg text-dark ${!isExpanded ? 'line-clamp-3' : ''}`}>
          {isExpanded ? (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: htmlContent ? contentStr : previewText
              }}
            />
          ) : (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: previewText
              }}
            />
          )}
        </div>
        <div className="mt-6 text-right">
          <button
            onClick={toggleContent}
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-primary shadow-sm transition-all duration-200 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-controls="toggle-content"
            aria-expanded={isExpanded}
          >
            <span className="font-medium">
              {isExpanded ? "Voir moins" : "Voir plus"}
            </span>
            <svg 
              className={`h-4 w-4 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ContentToggle;
