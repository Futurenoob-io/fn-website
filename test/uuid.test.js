import getUUID from '../src/lib/js/uuid';

test('should generate 36 digit uniq id', () => {
	expect(getUUID()).toHaveLength(36);
});
