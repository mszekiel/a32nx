import React, { useState } from 'react';
import { useInteractionEvent } from '../../../../../utils/hooks/useInteractionEvent';
import { MCDU } from '../../../../../utils/keys';
import { Color } from '../../../../components/Color/Color';
import { Container } from '../../../../components/Container/Container';
import { Selectable } from '../../../../components/Container/Fields/Selectable/Selectable';

const { Fields } = Container;

export function NavDataSelector() {
  const [data, setData] = useState(true);

  return (
    <>
      <Container.Row>
        <Fields.FullWidth description="ACTIVE NAV DATA BASE">
          <Selectable
            onSelect={{ event: MCDU.Left.L2, callback: () => setData(true) }}
            selected={data}
          >
            4MAY-4JUL
          </Selectable>
          <Color>TC111103001</Color>
        </Fields.FullWidth>
      </Container.Row>
      <Container.Row>
        <Fields.FullWidth description="SECOND NAV DATA BASE">
          <Selectable
            onSelect={{ event: MCDU.Left.L3, callback: () => setData(false) }}
            selected={!data}
            small
          >
            4MAY-4JUL
          </Selectable>
        </Fields.FullWidth>
      </Container.Row>
    </>
  );
}
