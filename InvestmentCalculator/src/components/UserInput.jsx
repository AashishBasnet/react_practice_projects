export default function UserInput({ onInputChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label for="initial">Initial Investment</label>
          <input
            type="number"
            name="initial"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onInputChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label for="annual">Annual Investment</label>
          <input
            type="number"
            name="annual"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onInputChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label for="expected">Expected Return</label>
          <input
            type="number"
            name="expected"
            value={userInput.expectedReturn}
            onChange={(event) =>
              onInputChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label for="duration">Duration</label>
          <input
            type="number"
            name="duration"
            value={userInput.duration}
            onChange={(event) => onInputChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
