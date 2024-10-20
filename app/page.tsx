import { RolesWrapper } from '@/core/security/rolesWrapper';
import { Stack, Typography } from '@mui/material';

export default function Home() {
  const adminClaim = `${process.env.ADMIN_ROLE}`;

  return (
    <Stack spacing={2} px={2}>
      <Typography>Only Admins can see the below message:</Typography>
      <RolesWrapper allowedRoles={[adminClaim]}>
        <Typography color="error">you are an admin</Typography>
      </RolesWrapper>
    </Stack>
  );
}
