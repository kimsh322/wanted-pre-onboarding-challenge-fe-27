interface IsValidFunc {
  ({ id, password }: { id: string; password: string }): boolean;
}

export const validationCheck: IsValidFunc = ({ id, password }) => {
  if (!id.includes("@") || !id.includes(".")) return false;
  if (password.length < 8) return false;
  return true;
};
