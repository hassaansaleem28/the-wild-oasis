import Heading from "../ui/Heading";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";

function Settings() {
  return (
    <div>
      <Heading as="h1" style={{ marginBottom: "3.2rem" }}>
        Update hotel settings
      </Heading>
      <UpdateSettingsForm />
    </div>
  );
}

export default Settings;
