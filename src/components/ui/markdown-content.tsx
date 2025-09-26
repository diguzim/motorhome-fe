import React from "react";

interface MarkdownContentProps {
  content: string;
  className?: string;
  maxLength?: number;
}

/**
 * A lightweight markdown renderer that handles basic markdown syntax
 * without requiring external dependencies. Uses Tailwind Typography for styling.
 */
export function MarkdownContent({
  content,
  className = "",
  maxLength,
}: MarkdownContentProps) {
  // Truncate content if maxLength is specified
  const processedContent =
    maxLength && content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;

  // Simple markdown to HTML conversion
  const convertMarkdownToHtml = (markdown: string): string => {
    return (
      markdown
        // Headers (# ## ###)
        .replace(/^### (.*$)/gim, "<h3>$1</h3>")
        .replace(/^## (.*$)/gim, "<h2>$1</h2>")
        .replace(/^# (.*$)/gim, "<h1>$1</h1>")
        // Bold (**text**)
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        // Italic (*text*)
        .replace(/(?<!\*)\*(?!\*)([^*]+)\*(?!\*)/g, "<em>$1</em>")
        // Unordered lists (- item)
        .replace(/^\- (.*$)/gim, "<li>$1</li>")
        // Wrap consecutive list items in <ul>
        .replace(
          /(<li>[\s\S]*?<\/li>(?:\s*<li>[\s\S]*?<\/li>)*)/g,
          "<ul>$1</ul>"
        )
        // Line breaks (convert double newlines to paragraphs)
        .replace(/\n\n/g, "</p><p>")
        // Wrap in paragraph tags if not already wrapped
        .replace(/^(?!<[h|u|o])/gm, "<p>")
        .replace(/(?<!>)$/gm, "</p>")
        // Clean up empty paragraphs
        .replace(/<p><\/p>/g, "")
        // Fix paragraph wrapping around headers and lists
        .replace(/<p>(<h[1-6]>)/g, "$1")
        .replace(/(<\/h[1-6]>)<\/p>/g, "$1")
        .replace(/<p>(<ul>)/g, "$1")
        .replace(/(<\/ul>)<\/p>/g, "$1")
    );
  };

  const htmlContent = convertMarkdownToHtml(processedContent);

  return (
    <div
      className={`prose prose-gray max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

/**
 * A variant for displaying markdown in cards with truncation
 */
export function MarkdownPreview({
  content,
  maxLength = 300,
  className = "",
}: MarkdownContentProps) {
  return (
    <MarkdownContent
      content={content}
      maxLength={maxLength}
      className={`prose-sm ${className}`}
    />
  );
}
