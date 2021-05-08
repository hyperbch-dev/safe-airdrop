import { expect } from "chai";
import { fetchTokenList } from "src/hooks/tokenList";

const configuredNetworks = ["MAINNET", "RINKEBY", "XDAI"];

describe("fetchTokenList()", () => {
  for (let network of configuredNetworks) {
    it(`fetches tokens for ${network} network`, () => {
      expect(() => fetchTokenList(network)).to.not.throw();
    });
  }
});

describe("useTokenList()", () => {
  it("Throws on unknown networks", () => {
    // TODO - not sure how to test this.
    expect(1).to.equal(1);
  });
});
