/* eslint-disable no-unused-vars */
import { useSettings } from "./useSettings";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useUpdateSetting } from "./useUpdateSetting";

const UpdateSettingsForm = () => {
  const { isLoading, settings: { minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice } = {} } =
    useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(event, nameField) {
    const { value } = event.target;

    if (!value) return;
    updateSetting({ [nameField]: value });
  }
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input
          type='number'
          id='min-nights'
          disabled={isUpdating}
          onBlur={(event) => handleUpdate(event, "minBookingLength")}
          defaultValue={minBookingLength}
        />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input
          type='number'
          id='max-nights'
          disabled={isUpdating}
          onBlur={(event) => handleUpdate(event, "minBookingLength")}
          defaultValue={minBookingLength}
        />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input
          type='number'
          id='max-guests'
          disabled={isUpdating}
          onBlur={(event) => handleUpdate(event, "maxGuestsPerBooking")}
          defaultValue={maxGuestsPerBooking}
        />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input
          type='number'
          id='breakfast-prices'
          onBlur={(event) => handleUpdate(event, "breakfastPrice")}
          defaultValue={breakfastPrice}
        />
      </FormRow>
    </Form>
  );
};

export default UpdateSettingsForm;
