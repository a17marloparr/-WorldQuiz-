import React, { useEffect } from "react";
import { useFetchPaises } from "../../hooks/useFetchPaises";

import Europe from "../../components/Europe/Europe";

import './Paises.css'

export default function Paises() {
  const { data, fetchPaises, isLoading, hasError } = useFetchPaises();

  useEffect(() => {
    fetchPaises();
  }, [])

  return (
    <div>
      <div className="bodyPaises">
        {data.filter(pais => pais.region.includes("Americas")).map(europe => (
          <Europe europe={europe} />
        ))}
      </div>
      <div className="bodyPaises">
        {data.filter(pais => pais.region.includes("Europe")).map(europe => (
          <Europe europe={europe} />
        ))}
      </div>
      <div className="bodyPaises">
        {data.filter(pais => pais.region.includes("Africa")).map(europe => (
          <Europe europe={europe} />
        ))}
      </div>
      <div className="bodyPaises">
        {data.filter(pais => pais.region.includes("Oceania")).map(europe => (
          <Europe europe={europe} />
        ))}
      </div>
      <div className="bodyPaises">
        {data.filter(pais => pais.region.includes("Asia")).map(europe => (
          <Europe europe={europe} />
        ))}
      </div>
    </div>
  )
}