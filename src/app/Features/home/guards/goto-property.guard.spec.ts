import { TestBed } from '@angular/core/testing';
import { GotoPropertyGuard } from './goto-property.guard';

describe( 'GotoToPropertyGuard', () =>
{
  let guard: GotoPropertyGuard;

  beforeEach( () =>
  {
    TestBed.configureTestingModule( {} );
    guard = TestBed.inject( GotoPropertyGuard );
  } );

  it( 'should be created', () =>
  {
    expect( guard ).toBeTruthy();
  } );
} );
