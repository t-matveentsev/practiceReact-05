import { Field, Formik, Form } from "formik";

const SearchBar = ({ handleChangeQuery, query }) => {
  const onSubmit = (values) => {
    console.log(values);
    handleChangeQuery(values.query);
  };

  const initialValues = {
    query,
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
