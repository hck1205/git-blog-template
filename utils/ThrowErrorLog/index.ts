export default (error: NodeJS.ErrnoException | null) => {
  if (error) throw error;
};
