import { moduleFor, test } from 'ember-qunit';

moduleFor('service:indexed-db', 'Unit | Service | indexed db', {
  needs: ['service:indexed-db-configuration']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});
