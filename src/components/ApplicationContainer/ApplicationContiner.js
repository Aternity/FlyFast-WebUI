import { AppShell } from '@mantine/core';
import ApplicationHeader from '../ApplicationHeader/ApplicationHeader';

const ApplicationContainer = (props) => {
  return (
    <AppShell
      fixed
      header={<ApplicationHeader />}
    >
      {props.children}
    </AppShell>
  )
}

export default ApplicationContainer;