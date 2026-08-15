import { acquiredIpTechnology, ipTechnologyPortfolioValue, ipTechnologyTotals } from "./conciergeAcquisitions";

export default function TechnologyTab() {
  return (
    <section className="atlas-tab atlas-technology-tab" aria-labelledby="atlas-technology-title">
      <header className="atlas-tech-register-header">
        <div>
          <p className="atlas-eyebrow">04 / Concierge IP + technology</p>
          <h1 id="atlas-technology-title">Acquired IP &amp; technology</h1>
          <p className="atlas-tech-register-intro">
            A minimal register of proprietary IP, supporting documents, and reported valuation.
          </p>
        </div>
        <dl className="atlas-tech-register-summary" aria-label="Portfolio totals">
          <div>
            <dt>Records</dt>
            <dd>{ipTechnologyTotals.records}</dd>
          </div>
          <div>
            <dt>Total valuation</dt>
            <dd>{ipTechnologyPortfolioValue}</dd>
          </div>
          <div>
            <dt>Documents</dt>
            <dd>{ipTechnologyTotals.documents}</dd>
          </div>
        </dl>
      </header>

      <article className="atlas-tech-register-panel" aria-labelledby="atlas-tech-register-title">
        <header className="atlas-tech-register-panel-head">
          <h2 id="atlas-tech-register-title">Register</h2>
          <span>IP · Technology · Documents · Valuation</span>
        </header>
        <div className="atlas-tech-register-table-wrap">
          <table className="atlas-tech-register-table">
            <thead>
              <tr>
                <th scope="col">IP</th>
                <th scope="col">Technology</th>
                <th scope="col">Documents</th>
                <th scope="col">Valuation</th>
              </tr>
            </thead>
            <tbody>
              {acquiredIpTechnology.map((item) => (
                <tr key={item.id}>
                  <th scope="row">
                    <span className="atlas-tech-register-id">{item.id}</span>
                    <strong>{item.ip}</strong>
                  </th>
                  <td>{item.technology}</td>
                  <td>
                    <ul className="atlas-tech-register-docs">
                      {item.documents.map((document) => (
                        <li key={document.filename}>
                          <span className="atlas-tech-register-doc">
                            <span>{document.name}</span>
                            <small>{document.filename}</small>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="atlas-tech-register-valuation">{item.valuation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}
