import React from "react";
import "./Test.css";
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

          <div class="d-flex mt-5 border justify-content-between">
            <div class="p-2 align-self-start">Flex item 1</div>
            <div class="p-2">Flex item 2</div>
            <div class="p-2 align-self-end">Flex item 3</div>
          </div>
          <div class="d-flex border mt-5 flex-column">
            <div class="align-self-center">Aligned flex item</div>
          </div>
        </form>
        <div class="row px-3 mb-4">
          <hr class="ver" />
          <small class="or text-center">Or</small>
          <hr class="ver" />
        </div>
      </div>
    );
  }
}

export default scheduleTargetRequest;
