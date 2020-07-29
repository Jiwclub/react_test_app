import React from "react";

export const Forms = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <form>
            <div className="form-group row">
              <label htmlFor="colFormLabelSm" className="TiHe">Email</label>
              <div className="col-sm-1">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <div className="form-group row">
                <label htmlFor="colFormLabelLg" >First Name*</label>
                <div className="col-md-8">
                  <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="colFormLabelLg" >Last Name*</label>
                <div className="col-md-8">
                  <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="" />
                </div>
              </div>
              <div>

              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="colFormLabelSm" className="TiHe">Birtdate*</label>
              <div className="form-group col-md-2">
                <div>
                  <input type="date" name="bday" max="3000-12-31" min="1000-01-01" className="form-control" />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="colFormLabelLg" >Nationatity*</label>
                <div>
                  <div className="">
                    <select id="inputState" class="form-control">
                      <option selected>---------
please selected---------</option>
                      <option>ไทย</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>

              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="colFormLabelSm" className="TiHe">Gender*</label>
              <div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                  <label className="form-check-label" htmlFor="inlineRadio1">male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                  <label className="form-check-label" htmlFor="inlineRadio2">female</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3" />
                  <label className="form-check-label" htmlFor="inlineRadio3">unsex</label>
                </div>
              </div>

            </div>
            <div className="form-group row">
              <label htmlFor="colFormLabelSm" className="TiHe">Tel*</label>
              <div className="form-group row">
                <div className="col-md-8">
                  <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="" />
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="colFormLabelSm" className="TiHe">Tel*</label>
              <div className="form-group row">
                <div className="col-md-8">
                  <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="" />
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="colFormLabelSm" className="TiHe">Tel*</label>
              <input type="text"></input>
            </div>
            <div className="form-group row">
              <label htmlFor="colFormLabelSm" className="TiHe">Passport No* </label>
              <input type="text"></input>
            </div>

            <div className="form-group row">
              <label htmlFor="colFormLabelSm" className="TiHe">Expected Salary: * </label>
              <input type="text"></input>
            </div>

            <button type="submit" className="btn btn-primary">Sign in</button>
          </form>
        </div>
      </div>

    </div>
  );
};
