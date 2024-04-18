import * as React from "react";

// import * as jqx from "jqwidgets-framework/jqwidgets";
import * as jqx from "../node_modules/jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
import JqxGrid, {
  IGridSource,
} from "../node_modules/jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";

import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";

const SeparatePage = () => {
  const source: IGridSource = {
    datatype: "json",
    datafields: [
      { name: "id", type: "number" },
      { name: "name", type: "string" },
      // Add other datafields as needed
    ],
    localdata: [
      { id: 1, name: "" }, // Include the "name" field even if it's initially empty
      { id: 2, name: "" },
      // Add more data as needed
    ],
  };

  // Configure grid settings
  const columns: jqx.IGridColumn[] = [
    { text: "ID", datafield: "id", width: "50%" },
    {
      editable: true,
      text: "Name",
      datafield: "name",
      width: "50%",
      // Enable editing for the "Name" field
      columntype: "checkbox", // Set the columntype to "textbox" for text input
    },
    // Add other columns as needed
  ];

  return (
    <div>
      <JqxGrid source={source} columns={columns} width={600} height={400} />
    </div>
  );
};

export default SeparatePage;
