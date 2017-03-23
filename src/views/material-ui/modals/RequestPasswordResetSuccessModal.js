import React from "react";
import { connect } from "react-redux";
import { hidePasswordResetRequestSuccessModal } from "../../../actions/ui";
import Modal from "./Modal";

class RequestPasswordResetSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="request-password-reset-success-modal"
        closeAction={hidePasswordResetRequestSuccessModal}
        title="Pasordet ditt er nå endret">
        <p>{this.props.auth.getIn(["ui", "requestPasswordResetSuccessMessage"])}</p>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(RequestPasswordResetSuccessModal);
