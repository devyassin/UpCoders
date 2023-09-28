"use client";
import CKeditor from "@/helpers/CKeditorHelper";
import { useEffect, useState } from "react";

const Ckeditor = () => {
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return <CKeditor value="" name="description" editorLoaded={editorLoaded} />;
};

export default Ckeditor;
