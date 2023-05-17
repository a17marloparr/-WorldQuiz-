import React from "react";
import { useFetchCountries } from "../../hooks/useFetchCountries";

import Europe from "../../components/Europe/Europe";

import './Paises.css'

export default function Paises() {
  const { paises } = useFetchCountries();

  return (
    <div>
      <div className="bodyPaises">
        {paises.filter(pais => pais.region.includes("Americas")).map(europe => (
          <Europe europe={europe} />
        ))}
      </div>
      <div className="bodyPaises">
        {paises.filter(pais => pais.region.includes("Europe")).map(europe => (
          <Europe europe={europe} />
        ))}
      </div>
      <div className="bodyPaises">
        {paises.filter(pais => pais.region.includes("Africa")).map(europe => (
          <Europe europe={europe} />
        ))}
      </div>
      <div className="bodyPaises">
        {paises.filter(pais => pais.region.includes("Oceania")).map(europe => (
          <Europe europe={europe} />
        ))}
      </div>
      <div className="bodyPaises">
        {paises.filter(pais => pais.region.includes("Asia")).map(europe => (
          <Europe europe={europe} />
        ))}
      </div>
    </div>
  )
}