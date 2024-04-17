import { ContextChatEngine, LLM, TextQaPrompt } from "llamaindex";
import { getDataSource } from "./index";

export async function createChatEngine(llm: LLM) {

  // Define a custom prompt
  const newTextQaPrompt: TextQaPrompt = ({ context, query }) => {
    return `Context information is below.
  ---------------------
  ${context}
  ---------------------
  Given the context information and no prior knowledge, answer the query. 
  Query: ${query}
  Answer:`;
  };

  const index = await getDataSource(llm);
  if (!index) {
    throw new Error(
      `StorageContext is empty - call 'npm run generate' to generate the storage first`,
    );
  }
  const retriever = index.asRetriever();
  retriever.similarityTopK = 3;

  return new ContextChatEngine({
    chatModel: llm,
    retriever,
    contextSystemPrompt: newTextQaPrompt,
  });
}
