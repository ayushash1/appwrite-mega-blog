/* eslint-disable react/prop-types */
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import conf from "../conf/conf.js";
/**
 * A wrapper around the tinymce-react Editor component that uses the
 * Controller component from react-hook-form to integrate with the
 * form state.
 *
 * @param {string} name The name of the field to be used to store the
 *   content of the editor.
 * @param {object} control The control props provided by react-hook-form
 *   to be passed to the Controller component.
 * @param {string} [label] The label to be displayed above the editor.
 * @param {string} [defaultValue] The initial value of the editor. Defaults
 *   to an empty string.
 * @returns {JSX.Element} The rendered Editor component.
 */
export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {/* Display the label if one is provided. */}
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      {/* Use the Controller component from react-hook-form to integrate
       * the Editor component with the form state. */}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            apiKey= {conf.tinyMCEKey}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
