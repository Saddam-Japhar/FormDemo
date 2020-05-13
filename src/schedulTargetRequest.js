import React from "react";
class scheduleTargetRequest extends React.Component {
  render() {
    return (
      <div className="container mt-3 ">
        <form>
          <div class="form-group mt-3 row">
            <label for="Environment" class="col-sm-2 col-form-label">
              Environment
            </label>
            <div class="col-sm-5">
              <select class="custom-select" id="inlineFormCustomSelect">
                <option selected>Choose...</option>
                <option value="Production">Production</option>
                <option value="QA">QA</option>
              </select>
            </div>
          </div>

          <div class="form-group mt-3 row">
            <label for="Country" class="col-sm-2 col-form-label">
              Country
            </label>
            <div class="col-sm-5">
              <select class="custom-select" id="inlineFormCustomSelect">
                <option selected>Choose...</option>
                <option value="USA">USA</option>
                <option value="JAPAN">Japan</option>
              </select>
            </div>
          </div>

          <div class="form-group mt-3 row">
            <label for="Promotions" class="col-sm-2 col-form-label">
              Promotion(s) to expect
            </label>
            <div class="col-sm-5">
              <input
                type="text"
                class="form-control"
                id="promotions"
                placeholder="BL_1234_5678,BL_2345_4567"
              />
            </div>
          </div>

          <div class="form-group mt-3 row">
            <label for="trigger" class="col-sm-2 col-form-label">
              When to trigger
            </label>
            <div class="col-sm-5">
              <input type="date" class="form-control" id="trigger" />
            </div>
          </div>

          <div class="form-group mt-3 row">
            <label for="Promotions" class="col-sm-2 col-form-label">
              Chain Store Number
            </label>
            <div class="col-sm-5">
              <input
                type="text"
                class="form-control"
                id="Chain_store_number"
                placeholder="012-2801"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default scheduleTargetRequest;
