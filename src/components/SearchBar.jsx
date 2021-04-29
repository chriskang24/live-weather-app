import React, { useCallback, useEffect, useState } from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import useDebounce from "../hooks/useDebounce";

export default function SearchBar(props) {

  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);
  const onSearch = useCallback(props.onSearch, [term])

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <MDBCol md="6">
      <MDBFormInline className="md-form"
        onSubmit={e => e.preventDefault()}
      >
        <MDBIcon icon="search" />
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search Info Here"
          aria-label="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </MDBFormInline>
    </MDBCol>
  );
}
