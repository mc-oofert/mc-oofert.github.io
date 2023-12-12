import { useLocalStorage } from "usehooks-ts";
import Selectpicker, { SelectpickerOptionType } from "../Selectpicker/Selectpicker";
import { LabeledSelectpicker } from "../LabeledItem/LabeledItem";

import "./PageHeader.less";

const options: SelectpickerOptionType[] = [
    { value: "None", label: "None", tooltip: "No spoilers: Factory or higher depth branch content is hidden." },
    {
        value: "Spoilers",
        label: "Spoilers",
        tooltip: "Moderate spoilers: Normal Factory and Research branch content is shown.",
    },
    { value: "Redacted", label: "Redacted", tooltip: "Full spoilers: All game content is shown" },
];

export default function PageHeader() {
    const [spoilers, setSpoilers] = useLocalStorage("spoilers", "None");
    const selected = options.find((o) => o.label === spoilers) || options[0];

    return (
        <div className="title-grid">
            <div className="cogminder-title">Cog-Minder</div>
            <h1 className="page-title">Combat</h1>
            <LabeledSelectpicker
                label="Spoilers"
                tooltip="What spoiler content to show. By default, no spoilers are shown."
            >
                <Selectpicker
                    className="spoilers-selectpicker"
                    isSearchable={false}
                    options={options}
                    value={selected}
                    onChange={(newValue) => {
                        setSpoilers(newValue!.value);
                    }}
                />
            </LabeledSelectpicker>
        </div>
    );
}
