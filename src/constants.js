export const COLUMNS_LOGS = [
  {
    dataField: "sqsDatatimeCreated",
    text: "TIME",
  },
  {
    dataField: "processName",
    text: "PROCESS",
  },
  {
    dataField: "publisherToken",
    text: "PUBLISHER TOKEN",
  },
  {
    dataField: "pipelineToken",
    text: "PIPELINE TOKEN",
  },
  {
    dataField: "filename",
    text: "FILENAME",
  },
  {
    dataField: "state",
    text: "STATE",
  },
  {
    dataField: "code",
    text: "CODE",
  },
  {
    dataField: "description",
    text: "DESCRIPTION",
    classes: "descr",
    ids: "descr",
  },
];

export const COLUMNS_SOURCE_SCHEMA = [
  {
    dataField: "name",
    text: "NAME"
  },
  {
    dataField: "type",
    text: "TYPE",
  },
];

export const STEPS = [
  { title: "Step 1" },
  { title: "Step 2" },
  { title: "Step 3" },
  { title: "Step 4" },
];

/*export const GLUE_SCHEMA_TYPES = [
  { value: "string", label: "string" },
  { value: "double", label: "double" },
  { value: "float", label: "float" },
  { value: "int", label: "int" },
  { value: "bigint", label: "bigint" },
  { value: "boolean", label: "boolean" },
  { value: "date", label: "date" },
  { value: "tinyint", label: "tinyint" },
  { value: "timestamp", label: "timestamp" },
  { value: "smallint", label: "smallint" },
  { value: "char", label: "char" },
  { value: "varchar", label: "varchar" }
]; */

export const GLUE_SCHEMA_TYPES = [
  { value: "string", label: "string" },
  { value: "boolean", label: "boolean" },
  { value: "bigint", label: "bigint" },
  { value: "char", label: "char" },
  { value: "double", label: "double" },
  { value: "decimal", label: "decimal" },
  { value: "date", label: "date" },
  { value: "float", label: "float" },
  { value: "int", label: "int" },
  { value: "smallint", label: "smallint" },
  { value: "struct", label: "struct" },
  { value: "tinyint", label: "tinyint" },
  { value: "timestamp", label: "timestamp" },
  { value: "varchar", label: "varchar" }
  
];



