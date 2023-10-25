import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "redux/selectors";
import { changeFilter } from "redux/filterSlice";
import { FilterContainer, FilterInput } from "./Filter.styled";

export const Filter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    return (
        <FilterContainer>
            <p>Find contacts by name:</p>
            <FilterInput
                type="text"
                name="filter"
                value={filter}
                onChange={evt => dispatch(changeFilter(evt.target.value))}
                placeholder="Search contact"
            >    
            </FilterInput>
        </FilterContainer >
    )
}