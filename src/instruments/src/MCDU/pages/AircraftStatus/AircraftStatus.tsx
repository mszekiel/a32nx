import React from 'react';
import { MCDU } from '../../../utils/keys';
import { Colors } from '../../components/Color/Color';
import { Container } from '../../components/Container/Container';
import { NavDataSelector } from './components/NavDataSelector/NavDataSelector';

const { Fields } = Container;

export function AircraftStatus() {
  return (
    <>
      <Container.Title>A320-251N</Container.Title>
      <Container.Row>
        <Fields.Label description="ENG">LEAP-1A26</Fields.Label>
      </Container.Row>
      <NavDataSelector />
      <Container.Row />
      <Container.Row>
        <Fields.Input insertOn={MCDU.Left.L5} validator={new RegExp('^[A-Z]{3,3}$')} description="CHG CODE" />
      </Container.Row>
      <Container.Row>
        <Fields.Label description="IDLE/PERF">+0.0/+5.4</Fields.Label>
        <Fields.Selectable color={Colors.White} onSelect={{ event: MCDU.Left.R6, callback: () => { } }} selector="sign" right description="SOFTWARE">STATUS/XLOAD</Fields.Selectable>
      </Container.Row>
    </>
  );
}

/**
 * Row Items
 * 1. Display only - {label, content}
 * 2. Clickable field - {label, content, onClick={onClick(['L1'], function)}   }
 * 3. Editable field - {label, content, validate={function}, fill={'squares','brackets'}     }
 * 4. Full width field - {label, <JSX.Element>conent onClick={onClick([L2], function)}    }
 */
