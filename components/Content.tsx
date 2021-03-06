// Packages
import React from 'react';

interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => (
  <div>
    {children}
    <style jsx>{`
      div {
        margin: 2rem 0 5rem;
      }
      div :global(p) {
        margin-top: 1.5rem;
        margin-bottom: 0;
      }
      div :global(img) {
        max-width: 100%;
      }
      div.lang-zh :global(p),
      div.lang-zh :global(li) {
        text-align: justify;
        text-justify: auto;
        hanging-punctuation: last allow-end;
      }
      div.lang-zh :global(em) {
        text-emphasis: filled dot;
        text-emphasis-position: under;
        font-style: inherit;
      }
      div.lang-zh :global(blockquote) {
        font-style: normal;
      }

      // :global(:target) {
      //   background: #fffa9e;
      // }
      // :global(ul) {
      //   list-style-type: none;
      //   padding: 0;
      // }
      // :global(li) {
      //   padding-left: 1.1875em;
      //   position: relative;
      //   margin-bottom: .25em;
      // }
      // :global(li):before {
      //   content: "•";
      //   position: absolute;
      //   left: .2em;
      // }
    `}</style>
  </div>
);

export default Content;
