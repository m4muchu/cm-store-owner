import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

interface filterState {
    Nike: boolean,
    addidas: boolean,
    puma: boolean,
    [key: string]: boolean
}

export const FilterSelector = () => {

    const [state, menuToggle] = useState<filterState>({
		Nike: true,
		addidas: true,
        puma: true
	});
	const [buttonstate, setButton] = useState(false);


    const handleClick = (e: any) => {
        e.preventDefault();
		return (
			setButton(!buttonstate)
		)
	};

	const secondLevelMenuToggle = (key: string) => {
		menuToggle((state) => ({ ...state, [key]: !state[key] }));
    };
    
	const handleClear = () => {
		return menuToggle({ ...state });
	};



    return (
        <Form.Group>
            <div className="custom-react-select--no-border w-100">
                <div>
                    <button
                        onClick={handleClick}
                        className="filter-dropdown-btn"
                    >
                        FILTER
                    </button>
                    <div
                        className={
                            buttonstate
                                ? "allStyle-filter"
                                : "noneStyle-filter"
                        }
                    >
                        <div className="filter_card">
                            <div className="filter-card-body">
                                <div className="filter-card-header">
                                    <h5 className="card-title">FILTRE</h5>
                                    <button className="filter-save">SAVE</button>
                                    <button
                                        className="filter-clear"
                                        onClick={() => handleClear()}
                                    >
                                        CLEAR
                                    									</button>
                                </div>
                                <hr className="MuiDivider-root-filter padding-adjustmnet" />
                                <div className="filter-options-wrapper">
                                    <div className="filter-options">
                                        <input
                                            type="checkbox"
                                            id="myCheck"
                                            onChange={() =>
                                                secondLevelMenuToggle("Nike")
                                            }
                                        />
                                        <p className="filter-drop-outer-text">Nike</p>
                                    </div>
                                    <div
                                        className={
                                            state.Nike
                                                ? "filter_inner_list_close"
                                                : "filter_inner_list_open"
                                        }
                                    >
                                        <ul>
                                            <li>
                                                <input type="checkbox" />
                                                <p>neo</p>
                                            </li>

                                            <li>
                                                <input type="checkbox" />
                                                <p>neo</p>
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <p>neo</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <hr className="MuiDivider-root-filter" />
                                <div className="filter-options-wrapper">
                                    <div className="filter-options">
                                        <input
                                            type="checkbox"
                                            onChange={() =>
                                                secondLevelMenuToggle("addidas")
                                            }
                                        />
                                        <p className=" filter-drop-outer-text">
                                            Addidas
                                        </p>
                                    </div>
                                    <div
                                        className={
                                            state.addidas
                                                ? "filter_inner_list_close"
                                                : "filter_inner_list_open"
                                        }
                                    >
                                        <ul>
                                            <li>
                                                <input type="checkbox" />
                                                <p>neo</p>
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <p>neo</p>
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <p>neo</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <hr className="MuiDivider-root-filter" />
                                <div className="filter-options-wrapper">
                                    <div className="filter-options">
                                        <input
                                            type="checkbox"
                                            onChange={() =>
                                                secondLevelMenuToggle("puma")
                                            }
                                        />

                                        <p className=" filter-drop-outer-text ">Puma</p>
                                    </div>
                                    <div
                                        className={
                                            state.puma
                                                ? "filter_inner_list_close"
                                                : "filter_inner_list_open"
                                        }
                                    >
                                        <ul>
                                            <li>
                                                <input type="checkbox" />
                                                <p>neo</p>
                                            </li>

                                            <li>
                                                <input type="checkbox" />
                                                <p>neo</p>
                                            </li>

                                            <li>
                                                <input type="checkbox" />
                                                <p>neo</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Form.Group>
    )
}