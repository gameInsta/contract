pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GameInstaToken is ERC20, ERC20Burnable {
    constructor() public ERC20("SeedBlockRToken", "SDB"){
        _mint(msg.sender, 1*10**30);
    }
    function buyToken(uint256 amount) external {
        _mint(msg.sender, amount);
    }
}